g-trends
======

Basic clone of google trends

Hosted on AWS: http://ec2-54-145-15-71.compute-1.amazonaws.com/

# Installation

1. Install [docker](https://docs.docker.com/installation/)
2. `git clone git@github.com:ubermensh/g-trends.git`
3. `cd g-trends`, `docker build -t ubermensh/g-trends .`
4. `docker run -p 2000:3000 -d ubermensh/g-trends`
5. go to http://localhost:2000

---
![alt text](https://i.imgur.com/mCQrj3Z.png)
