FROM debian:jessie

RUN mkdir -p /data/finn

ADD . /data/finn

VOLUME /data/finn
