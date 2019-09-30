FROM myfront/base_img:latest

COPY ./index.html .
COPY ./reset.html .
COPY ./src/ .

CMD npm run build
CMD npm run dev

EXPOSE 8080


