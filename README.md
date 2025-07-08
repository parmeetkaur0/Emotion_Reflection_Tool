# Emotion Reflection Tool

A web application designed to analyze text emotions using a Python backend API and a React frontend with TypeScript. This project was developed as part of the Sarthi.me Full Stack Development internship assignment.

## Overview

The Emotion Reflection Tool allows users to input text and receive an emotion analysis (e.g., happy, sad, anxious) with a confidence score. It features a responsive UI, history of past analyses, and a clear button for resetting input.

## Features

- **Emotion Analysis**: Analyzes text and returns the dominant emotion and confidence level.
- **History Tracking**: Displays a log of previous analyses.
- **Responsive Design**: Optimized for both mobile and desktop views.
- **Clear Functionality**: Resets the input and result fields.
- **Professional UI**: Uses Tailwind CSS with a custom color palette.

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Axios
- **Backend**: Python, Flask, Flask-CORS
- **Development Tools**: Node.js, npm, pip

## Setup Instructions

### Prerequisites

- **Node.js** and **npm** (for frontend)
- **Python 3.x** (for backend)
- **Git** (for version control)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/parmeetkaur0/Emotion_Reflection_Tool.git
   cd emotion-reflection-tool
2. **Backend Setup**:
   ```bash
   Navigate to the backend directory:
      cd backend
   Install backend dependencies:
      pip install flask flask-cors
   Start the backend server:
      python app.py
   The backend runs on http://localhost:5000.
3. **Frontend Setup**:
   ```bash
   Navigate to the frontend directory:
      cd frontend
   Install frontend dependencies:
      npm install
   Start the development server:
      npm run dev
   The frontend runs on http://localhost:5173 (or as specified by the output).   
