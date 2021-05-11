import { LitElement, html, css } from 'lit';

import Base, { style } from './Base.js';
import '../components/Card/news-card.js';

class NewsHome extends Base {

  static get styles() {
    return [
      style,
      css`
        :host news-card:first-child {
          margin-top: 1rem;
        }
      `
    ];
  }

  static get properties() {
    return {
      articles: Array
    };
  }

  constructor() {
    super();
    this.articles = [];
  }

  render() {
    return html`${
      this.articles.map(artcile => html`
        <news-card
          .placeholder="${artcile.placeholder}"
          .image="${artcile.image}"
          .title="${artcile.content.title}"
          .slug="${artcile.content.slug}"
          .description="${artcile.content.description}"
        ></news-card>
      `)
    }`;
  }
}

customElements.define('news-home', NewsHome);