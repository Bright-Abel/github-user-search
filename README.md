## Github user search

Allows user to search for any user account register with github and display the user info

## Table of Contents

- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Additional Features](#additional-features)

## Tech Stack

- **Frontend:** Next.js (React-based framework)
- **Styling:** Tailwind CSS (Utility-first CSS framework)
- **API:** GitHub API (for user data)
- **Animations:** AOS (Animate on Scroll)

## Installation

### Steps

1. **Clone the Repository**

```
 git clone https://github.com/Bright-Abel/github-user-search.git
 cd mediconn
 npm install
```

2. **Get your Authentication on your github account**

### Steps

- Go to GitHub, and click on your profile picture.
- Navigate to Settings > Developer settings > Personal access tokens.
- Click on Generate new token.
- Set a name for the token and select the appropriate scopes depending on what you need (e.g., repo for access to repositories, workflow for GitHub Actions, etc.).
- Click Generate token and save the token securely as it will not be shown again.

3. **Run the Server**

```
 npm run dev
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
GITHUB_ACCESS_TOKEN = the-generated-token-from-github
GITHUB_ENDPOINT = https://api.github.com
```

## Additional Features

- **Voice Search:** Allows users to search GitHub profiles using voice commands through the browser's speech recognition capabilities.
