import tensorflow
import pickle
import tensorflow.keras.preprocessing.sequence as sequence
import numpy as np


def load_model(model_path='LSTM2.h5'):
    model = tensorflow.keras.models.load_model(model_path)
    return model

def load_tokenizer(tokenizer_path='LSTMtokenizer.pickle'):
    with open(tokenizer_path, 'rb') as file:
        tokenizer = pickle.load(file)
    return tokenizer

def classify_sentence(sentence, model_path='LSTM2.h5', max_sequence_length=100):
    model = load_model(model_path)
    tokenizer = load_tokenizer()

    sequences = tokenizer.texts_to_sequences([sentence])

    padded_sequences = sequence.pad_sequences(sequences, maxlen=max_sequence_length)
    
    prediction = model.predict(padded_sequences)[0]

    pred_class = np.argmax(prediction)

    if pred_class == 0:
        prediction = 'self.anxiety'
    elif pred_class == 1:
        prediction = 'self.SuicideWatch'
    elif pred_class == 2:
        prediction = 'self.bipolar'
    elif pred_class == 3:
        prediction = 'self.depression'
    elif pred_class == 4:
        prediction = 'self.off my chest'
    
    return prediction