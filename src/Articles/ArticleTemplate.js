import React from 'react';

export const ArticleType = Object.freeze({
  CREATIVE:   Symbol("creative"),
  TECH:  Symbol("tech"),
  LEARNING: Symbol("learning"),
  EXISTENTIAL: Symbol("existential"),
  PERSONAL: Symbol("personal")
});


export class ArticleTemplate {
  constructor () {
    this.identifier_value 
        = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  
  identifier() {
    return this.identifier_value;
  }

  /*
  return "Article Title";
  */
  title() {
    return Error('\
      title was not implemented, try: \n\n \
      title() {return "Article Title";} \n');
  }

  /*
  return new Date("November 9 2019 11:36");
  */
  date() {
    return Error('\
      date was not implemented, try: \n\n \
      date() {return new Date("November 9 2019 11:36");} \n');
  }

  /*
  return [
      ArticleType.CREATIVE,
      ArticleType.TECH,
      ArticleType.LEARNING,
      ArticleType.EXISTENTIAL,
      ArticleType.PERSONAL
    ]
  */
  type() {
    Error('\
      type was not implemented, try: \n\n \
      type() {\n \
      \treturn [ \n \
      \t\t ArticleType.CREATIVE,\n \
      \t\t ArticleType.TECH,\n \
      \t\t ArticleType.LEARNING,\n \
      \t\t ArticleType.EXISTENTIAL,\n \
      \t\t ArticleType.PERSONAL,\n \
      \t]; \n \
      } \
      ');  
  }

  content() {
    return (<div>Default Content</div>);
  }
}