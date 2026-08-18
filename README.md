# 🩺 Skin Cancer Detection Using Deep Learning

A deep learning-based web application for classifying skin lesions from dermoscopic images. The project uses CNN and transfer learning techniques to assist in automated skin-lesion classification.

> ⚠️ This project is developed for academic/research purposes only and is not a medical diagnostic tool.

## 🚀 Features

- 🩺 Skin-lesion image classification
- 🤖 CNN & Transfer Learning
- 📷 Dermoscopic image upload
- 🔄 Image preprocessing & augmentation
- 📊 Model performance evaluation
- 🔥 Grad-CAM explainability
- 🌐 Flask-based web application

## 🧠 Models

- Custom CNN — Baseline
- MobileNetV2 — Transfer Learning
- EfficientNet — Transfer Learning

## 📂 Dataset

- HAM10000
- ISIC 2018

The datasets are not included in this repository due to their size.

## 🛠️ Tech Stack

**Languages:** Python, HTML, CSS, JavaScript

**Deep Learning:** TensorFlow, Keras, CNN, MobileNetV2, EfficientNet

**Libraries:** NumPy, Pandas, OpenCV, Scikit-learn, Matplotlib

**Backend:** Flask

## 📁 Project Structure

```text
Skin-Cancer-Detection-using-Deep-Learning/
│
├── data/
├── notebooks/
├── src/
│   ├── train.py
│   ├── evaluate.py
│   ├── predict.py
│   └── preprocessing.py
├── models/
├── results/
├── static/
├── templates/
├── app.py
├── requirements.txt
├── .gitignore
└── README.md
⚙️ Installation
git clone https://github.com/Tanishkaa2/Skin-Cancer-Detection-using-Deep-Learning.git
cd Skin-Cancer-Detection-using-Deep-Learning
pip install -r requirements.txt
▶️ Run
python app.py

Open:

http://127.0.0.1:5000
📊 Evaluation

Models are evaluated using:

Accuracy
Precision
Recall
F1-Score
Confusion Matrix
👥 Team

Final Year Project — B.Tech Information Technology

Developed as a collaborative academic project.

⚕️ Disclaimer

This application is not intended for medical diagnosis or treatment. Predictions should not replace professional medical advice.

