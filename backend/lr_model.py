import pickle
import os

def load_model(model_path='logistic_regression_model.pkl'):
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
    return model

def load_vectorizer(vectorizer_path='tfidf_vectorizer.pkl'):
    with open(vectorizer_path, 'rb') as file:
        vectorizer = pickle.load(file)
    return vectorizer

def classify_sentence(sentence, model_path='logistic_regression_model.pkl', vectorizer_path='tfidf_vectorizer.pkl'):
    model = load_model(model_path)
    vectorizer = load_vectorizer(vectorizer_path)
    
    sentence_features = vectorizer.transform([sentence])
    
    prediction = model.predict(sentence_features)
    
    return prediction[0]
