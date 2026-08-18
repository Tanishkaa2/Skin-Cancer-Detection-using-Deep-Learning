Skin Cancer Detection Using Deep Learning
Overview

Skin cancer is one of the most common forms of cancer, and early identification of suspicious skin lesions can assist healthcare professionals in further evaluation.

This project presents a deep-learning-based image classification system for skin-lesion analysis using publicly available dermoscopic image datasets. The system explores convolutional neural networks and transfer-learning architectures to classify skin lesions and provides visual explanations using Grad-CAM.

The project is developed as an academic/research project and is not intended to provide medical diagnosis or replace professional medical advice.

Problem Statement

Manual analysis of dermoscopic images can be challenging because skin lesions may have significant visual similarities across different disease categories.

The objective of this project is to develop an AI-assisted image classification system that:

Processes dermoscopic skin-lesion images.
Classifies images into predefined lesion categories.
Compares multiple deep-learning architectures.
Evaluates models using appropriate classification metrics.
Provides visual explanations using Grad-CAM.
Integrates the trained model into a web application.
Objectives
Analyze and preprocess dermoscopic skin-lesion images.
Investigate class imbalance in the dataset.
Develop a baseline CNN model.
Apply transfer learning using pretrained architectures.
Compare MobileNetV2 and EfficientNet-based models.
Fine-tune the best-performing model.
Evaluate performance using multiple metrics.
Implement Grad-CAM-based model explainability.
Integrate the final model into a Flask web application.
Provide an easy-to-use interface for image upload and prediction.
Datasets

The project uses publicly available dermoscopic image datasets, including:

HAM10000

HAM10000 is a widely used dataset for skin-lesion classification containing images across seven major diagnostic categories.

ISIC 2018

The International Skin Imaging Collaboration dataset provides dermoscopic images for research in automated skin-lesion analysis.

The datasets themselves are not included in this repository because of their size.

Dataset Classes

The HAM10000 classification task contains seven categories:

Code	Description
akiec	Actinic keratoses / intraepithelial carcinoma
bcc	Basal cell carcinoma
bkl	Benign keratosis
df	Dermatofibroma
mel	Melanoma
nv	Melanocytic nevi
vasc	Vascular lesions

The exact classification setup and preprocessing methodology are documented in the notebooks.

Methodology
                 Dermoscopic Images
                         │
                         ▼
                  Data Collection
                         │
                         ▼
                 Data Exploration
                         │
                         ▼
                  Data Cleaning
                         │
                         ▼
                Data Preprocessing
                         │
                         ▼
                 Data Augmentation
                         │
                         ▼
                Model Development
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
        Baseline CNN            Transfer Learning
                                     │
                          ┌──────────┴──────────┐
                          ▼                     ▼
                     MobileNetV2          EfficientNet
                          │                     │
                          └──────────┬──────────┘
                                     ▼
                              Model Evaluation
                                     │
                                     ▼
                              Best Model
                                     │
                                     ▼
                                  Grad-CAM
                                     │
                                     ▼
                               Flask Web App
Data Preprocessing

The preprocessing pipeline includes:

Image resizing.
Pixel normalization.
Dataset validation.
Class-label encoding.
Training/validation/test splitting.
Data augmentation for the training set.

Example augmentations include:

Horizontal flipping.
Small rotations.
Zoom transformations.

Augmentation parameters are selected carefully to avoid unrealistic transformations of medical images.

Class Imbalance

Medical image datasets can contain substantially different numbers of samples across classes.

Therefore, class distribution is analyzed before training.

Depending on the experimental setup, techniques such as:

Class weighting.
Controlled augmentation.
Balanced sampling.

may be used to improve minority-class performance.

Models
1. Baseline CNN

A custom convolutional neural network is implemented as the baseline model.

Architecture:

Input
 ↓
Conv2D
 ↓
MaxPooling
 ↓
Conv2D
 ↓
MaxPooling
 ↓
Conv2D
 ↓
MaxPooling
 ↓
Flatten
 ↓
Dense
 ↓
Output

The baseline provides a reference point for evaluating more advanced architectures.

2. MobileNetV2

MobileNetV2 is used through transfer learning with ImageNet pretrained weights.

The pretrained feature extractor is initially frozen while a new classification head is trained.

The later stages are then fine-tuned using a smaller learning rate.

3. EfficientNet

EfficientNet is evaluated as an additional transfer-learning architecture to investigate whether improved feature extraction produces better classification performance.

Transfer Learning

The transfer-learning process consists of two stages.

Stage 1 — Feature Extraction
Pretrained Backbone
       ↓
Frozen Layers
       ↓
New Classification Head
       ↓
Training
Stage 2 — Fine Tuning

Selected layers of the pretrained backbone are unfrozen and trained using a low learning rate.

This allows the model to adapt pretrained visual features to dermoscopic images.

Model Evaluation

The models are evaluated using:

Accuracy
Precision
Recall
F1-score
Confusion matrix
ROC-AUC where applicable

Accuracy alone is not considered sufficient because of potential class imbalance.

Results

Actual experimental results will be added after completing the model training and evaluation experiments.

Model	Accuracy	Precision	Recall	F1-score
Baseline CNN	TBD	TBD	TBD	TBD
MobileNetV2	TBD	TBD	TBD	TBD
EfficientNet	TBD	TBD	TBD	TBD

Do not replace TBD with numbers until the models have actually been evaluated on the test set.

Explainable AI — Grad-CAM

Grad-CAM is used to visualize regions of an input image that contribute to the model's prediction.

The process is:

Input Image
     ↓
Trained CNN
     ↓
Prediction
     ↓
Gradient Analysis
     ↓
Activation Heatmap
     ↓
Visualization

This provides an additional level of interpretability for model predictions.

Web Application

The trained model is integrated into a Flask-based web application.

Application flow:

User
 │
 ▼
Upload Image
 │
 ▼
Flask Backend
 │
 ▼
Image Preprocessing
 │
 ▼
Trained Model
 │
 ▼
Prediction + Confidence
 │
 ▼
Grad-CAM
 │
 ▼
Web Interface
Features
Image upload.
Image preprocessing.
Skin-lesion classification.
Prediction confidence.
Grad-CAM visualization.
Simple responsive interface.
Error handling for invalid uploads.
Project Structure
Skin-Cancer-Detection-using-Deep-Learning/
│
├── data/
│   └── README.md
│
├── notebooks/
│   ├── 01_EDA.ipynb
│   ├── 02_Preprocessing.ipynb
│   ├── 03_Baseline_CNN.ipynb
│   ├── 04_MobileNetV2.ipynb
│   ├── 05_EfficientNet.ipynb
│   └── 06_Model_Evaluation.ipynb
│
├── src/
│   ├── config.py
│   ├── data_loader.py
│   ├── preprocessing.py
│   ├── train.py
│   ├── evaluate.py
│   ├── predict.py
│   └── gradcam.py
│
├── models/
│   └── README.md
│
├── results/
│   ├── figures/
│   ├── confusion_matrix.png
│   └── metrics.csv
│
├── templates/
│   └── index.html
│
├── static/
│   ├── css/
│   ├── js/
│   └── uploads/
│
├── app.py
├── requirements.txt
├── .gitignore
└── README.md

Installation

Clone the repository: git clone https://github.com/Tanishkaa2/Skin-Cancer-Detection-using-Deep-Learning.git
Navigate to the project: cd Skin-Cancer-Detection-using-Deep-Learning
Create a virtual environment: python -m venv venv
Activate it on Windows: venv\Scripts\activate
Install dependencies: pip install -r requirements.txt

Dataset Setup

Download the required datasets from their official sources.

Place the required dataset files under:

data/

Follow the dataset preparation instructions in:

data/README.md
Training

Run the training pipeline: python src/train.py

The trained model should be saved under:

models/
Evaluation

Run: python src/evaluate.py

Evaluation results and visualizations should be saved under:

results/
Running the Web Application

Start Flask: python app.py

Then open: http://127.0.0.1:5000

Technologies Used
Programming
Python
JavaScript
HTML
CSS
Deep Learning
TensorFlow
Keras
CNN
Transfer Learning
MobileNetV2
EfficientNet
Image Processing
OpenCV
Pillow
NumPy
Data Science
Pandas
Scikit-learn
Matplotlib
Seaborn
Backend
Flask
Version Control
Git
GitHub
Limitations

This project has several limitations:

Model performance depends on the quality and distribution of the training data.
Dataset imbalance can affect minority-class predictions.
Dermoscopic images may differ from real-world photographs.
Model confidence does not guarantee diagnostic correctness.
The system has not been validated for clinical deployment.
Further external validation is required before any real-world medical application.
Future Work

Potential improvements include:

Larger and more diverse datasets.
Patient-level evaluation.
Improved class-balancing strategies.
Additional CNN architectures.
Ensemble learning.
Advanced explainability techniques.
Better image-quality assessment.
External dataset validation.
Cloud deployment.
Mobile application integration.

Disclaimer

This project is intended strictly for academic, educational, and research purposes.

It is not a medical diagnostic system and should not be used to diagnose, treat, or make clinical decisions regarding skin cancer.

Any prediction produced by the system should be reviewed by a qualified healthcare professional.

License

This project is intended for academic and educational use. Add an appropriate open-source license if your team decides to distribute the code publicly.
