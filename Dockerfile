FROM denoland/deno:2.0.0-rc.7 as builder

WORKDIR /app

COPY . .

RUN deno task compile

FROM ubuntu:latest

WORKDIR /app

COPY --from=builder app/bin/budget-tracker-service .

CMD [ "./budget-tracker-service" ]