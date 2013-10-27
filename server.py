import os

from flask import Flask, request, render_template, Response

from helpers import modality_score

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('index.html');

@app.route('/modality/<sentence>')
def modality(sentence):
    score = modality_score(sentence)
    return Response(str(score))

if __name__ == '__main__':
    #setup dev server
    app.debug = True
    app.run(host='gatchan.ber.to', port=8080)
