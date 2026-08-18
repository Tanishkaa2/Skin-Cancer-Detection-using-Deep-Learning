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

## 📂 Dataset

- HAM10000
- ISIC 2018

The datasets are not included in this repository due to their size.

## 🛠️ Tech Stack

**Languages:** Python, HTML, CSS, JavaScript

**Deep Learning:** TensorFlow, Keras, CNN, MobileNetV2, EfficientNet

**Libraries:** NumPy, Pandas, OpenCV, Scikit-learn, Matplotlib

**Backend:** Flask

## 📈 Model Performance

| Metric | Value |
|---|---:|
| Accuracy | **85.4%** |
| Framework | TensorFlow / Keras |
| Model | MobileNetV2 |
| Input Size | **224 × 224** |

## 📁 Project Structure

```text
Skin-Cancer-Detection-using-Deep-Learning/
│
├── Dataset/
│   └── README.md
│
├── Model/
│   └── skin_cancer_model.h5
│
├── Static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── uploads/
│
├── Templates/
│   └── index.html
│
├── app.py
├── train_model.py
├── predict.py
├── requirements.txt
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Tanishkaa2/Skin-Cancer-Detection-using-Deep-Learning.git
```

### 2. Navigate to the Project

```bash
cd Skin-Cancer-Detection-using-Deep-Learning
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Virtual Environment

**Windows:**

```bash
venv\Scripts\activate
```

**Linux / macOS:**

```bash
source venv/bin/activate
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

### 6. Run the Application

```bash
python app.py
```
## 🚀 Future Improvements

- Improve model accuracy and generalization
- Add Grad-CAM for model explainability
- Handle class imbalance more effectively
- Support additional skin-lesion categories
- Perform external dataset validation
- Deploy the application on a cloud platform
- Develop a mobile application

---

## 📚 Applications

- 🩺 Skin-Lesion Image Classification
- 🤖 AI-Assisted Medical Image Analysis
- 🔬 Medical Imaging Research
- 🎓 Deep Learning Education and Research
- 🌐 Web-Based Skin-Lesion Analysis

---

## 👩‍💻 Author

**Tanishka Gupta**

- 🎓 B.Tech – Information Technology
- 💻 GitHub: [Tanishkaa2](https://github.com/Tanishkaa2)

---

## ⚕️ Disclaimer

This project is developed for **academic and research purposes only**.

It is **not a medical diagnostic tool** and should not be used for diagnosis, treatment, or medical decision-making. The results should not replace advice from a qualified healthcare professional.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
