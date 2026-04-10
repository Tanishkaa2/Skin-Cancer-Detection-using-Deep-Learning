from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image

app = Flask(__name__)
model = tf.keras.models.load_model("model/skin_cancer_model.h5")

def preprocess(img):
    img = img.resize((128,128))
    img = np.array(img)/255.0
    img = np.expand_dims(img, axis=0)
    return img

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["image"]
    img = Image.open(file)

    processed = preprocess(img)
    prediction = model.predict(processed)[0][0]

    result = "Malignant" if prediction > 0.5 else "Benign"

    return jsonify({"result": result, "confidence": float(prediction)})

if __name__ == "__main__":
    app.run(debug=True)
