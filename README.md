# GWN Network Login Tool

This tool is meant to login any system automatically into a Lancom system with provided credentials.

## Setup

1. Clone this repo
2. run `npm install`
3. run `npx playwright install chromium`
4. copy _.env.example_ to _.env_
5. fill data in _.env_

## Usage

Run `npm start`

## Result

This script will output either "Online" or "Offline" depending on the state **after** the login attempt (login is skipped when already online).

The script also signals with exitcode **1** when the login was **not** successful.
