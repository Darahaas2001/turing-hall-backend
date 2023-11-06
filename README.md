# Turing Hall Backend

Welcome to the Turing Hall Backend project! This Node.js application serves as the backend for the Turing Hall application and includes IPC functionality with a Python script. This README provides instructions on how to set up and run the project effectively.

## Prerequisites

Before you get started, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Python 3](https://www.python.org/downloads/) (for IPC)
- [Virtual Environment (venv)](https://docs.python.org/3/library/venv.html) for Python (recommended for setting up a virtual environment)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (for Node.js dependencies)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Darahaas2001/turing-hall-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd turing-hall-backend
   ```

3. Install Python dependencies using pip and set up a virtual environment (recommended):

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. Install Node.js dependencies using Yarn:

   ```bash
   yarn install
   ```

5. Start the application using the following command:

   ```bash
   python3 ipc.py & yarn start
   ```

6. The WebSocket will be activated, providing IPC functionality to Node.js and Python to respond to messages on the frontend using AIML.

## Frontend Code

The code for the frontend is available at [Turing Hall Frontend Repository](https://github.com/Darahaas2001/turing-hall-frontend). Make sure to set up and configure the frontend to work seamlessly with this backend.
