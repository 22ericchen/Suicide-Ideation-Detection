from flask import Flask, request, jsonify
from flask_cors import CORS
import lr_model as lr
import lstm_model as lstm
import tf_model as tf

app = Flask(__name__)
CORS(app)

@app.route('/detect', methods=['POST'])
def detect():
    data = request.get_json()
    type = data['type']
    sentence = data['sentence']

    if type == 'lr':
        prediction = lr.classify_sentence(sentence)
    elif type == 'lstm':
        prediction = lstm.classify_sentence(sentence)
    else:
        prediction = tf.classify_sentence(sentence)

    print(prediction)
        
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True)