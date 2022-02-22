import pickle
from flask import Flask, request
from flask_cors import CORS

multilabel_binarizer = pickle.load(open('multilabelBinarizer.pickle', 'rb'))
classifier = pickle.load(open('pipeline.pickle', 'rb'))
app = Flask(__name__)
CORS(app)

@app.route('/tagging', methods=['POST'])
def tagging():
    inp = [request.json['question']]
    res = multilabel_binarizer.inverse_transform(classifier.predict(inp))
    final_res = [i for i in res[0]]
    
    return {
        'status': 200,
        'results': final_res}

if __name__ == '__main__':
    app.run(debug=True, port=8080)