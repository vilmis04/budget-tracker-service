# budget-tracker-service

## Setup

To install dependencies run `deno install --allow-scripts`

## Run

### Without supporting services locally

Run `deno task run`

### With supporting services in docker

Run `deno task start`

Inside the container run `deno task run`

## Compile

Run `deno compile --target x86_64-unknown-linux-gnu -A --output ./bin/budget-tracker-service ./src/main.ts`

## Project info

https://www.notion.so/Roadmap-1179c45a302d8014aadee70e2d49e764