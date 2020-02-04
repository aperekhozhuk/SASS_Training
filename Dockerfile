FROM maestro1997/myfront_base_img 

COPY ./index.html .
COPY ./reset.html .
COPY ./src/ .

CMD npm run build
CMD npm run dev

EXPOSE 8080


