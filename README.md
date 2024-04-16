# Suicide Ideation Detection
### By Matthew Wang, Eric Chen, Jessica Zhao
In this project, we trained three different types of models, logistic regression, LSTM, and a transformer, to detect suicide ideation and other mental illnesses within text. We trained our models on posts from Reddit that were labeled with either suicide, depression, anxiety, bipolar, or a general "off my chest". We checked the performance metrics of each of the models to see which performed the best.

## Running Notebook Files
The notebooks containing our models are located within the backend directory under the Models folder. Ensure that the required Python packages are installed, and then you can run all the cells or run each one individually. If there are issues with loading the .csv file, try modifying the `train_path`.

## Starting Full-stack Application
### Starting the backend
- `pip install flask`
- `cd backend`
- Windows Powershell: `set FLASK_APP=app.py`
- Windows Command Prompt: `$env:FLASK_APP = "app.py"`
- MacOS/Linux: `export FLASK_APP=app.py`
### Starting the frontend
- make sure Node.js is installed
- `cd frontend`
- `npm install`
- `npm start`
