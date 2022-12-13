## Tech Stack
-  React js, Next js Framework, Postgresql, deployed on `Vercel`.
-  React component are imported from `Material-UI`.
-  Cloud `Postgresql` database is deployed on `ElephantSQL`.
-  `Primsa` is used for connection btw `Cloud server` and `Nextjs`.

## Assumption
-  As mentioned in the Assignment, we have to create only form.
-  There is completePayment function, which accept payment details and does payment to us
   - That's why after submitting form, a message Appears saying
      -  `Payment has been completed, now you are enrolled to Yoga classes`
   -  Fot the time being, every time user submit form, payment fets successfully completed.
-  There is no need to include entities like Instructor, etc.
-  There is no need to have special functionailty in form for changing of batch as user registers on    montly basis, User can select any bactch, while enrolling.


## Features
-  Validation of form.
      Age limit between 18-65.
 Pattern for Email is set as something@gmail.com.
-  Payment Complete and submission shows in snackbar.
-  All files are properly structured, which makes code scalable.
-  Comments are  written for Code readability.
- [Deployed Application URL](https://yoga-bootcamp.vercel.app/form)

## ER Diagram
![ER Diagram for Yoga classes](https://user-images.githubusercontent.com/56669314/207396904-4515bbf4-94ea-4d4a-bc1e-2f14b5ecb322.jpeg)

## SQL Tables
![SQL Tables](https://user-images.githubusercontent.com/56669314/207396743-52bfa611-3258-4b77-ac13-eb254a1a9eef.jpeg)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
