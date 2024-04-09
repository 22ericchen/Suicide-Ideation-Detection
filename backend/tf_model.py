import torch
from transformers import AutoConfig, AutoModelForSequenceClassification, DistilBertTokenizer

def load_model():
    config = AutoConfig.from_pretrained("transformer_model")
    model = AutoModelForSequenceClassification.from_pretrained("transformer_model", config=config)

    return model

def classify_sentence(sentence):
    model = load_model()
    tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")

    inputs = tokenizer(sentence, return_tensors="pt", padding=True, truncation=True)
    
    model.eval()

    with torch.no_grad():
        outputs = model(**inputs)

    prediction = torch.argmax(outputs.logits, dim=1).item()

    if prediction == 0:
        return "self.anxiety"
    elif prediction == 1:
        return "self.bipolar"
    elif prediction == 2:
        return "self.depression"
    elif prediction == 3:
        return "self.SuicideWatch"
    else:
        return "self.off my chest"