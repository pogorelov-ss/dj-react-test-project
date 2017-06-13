FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /dj_app
WORKDIR /dj_app
COPY ./requirements.txt /dj_app/
COPY ./python-entrypoint.sh /
RUN pip install django_debug_toolbar django_extensions
RUN pip install -r requirements.txt
EXPOSE 8000
ENTRYPOINT ["/python-entrypoint.sh"]
#CMD ["--socket", ":8000"]