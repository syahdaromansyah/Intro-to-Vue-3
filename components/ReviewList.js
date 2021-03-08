app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="review-container">
      <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            {{review.name}} {{review.recommend ? '' : 'not'}} recommend this product.
            <br />
              "{{ review.review }}"
            <br/>
        </li>
      </ul>
    </div>
    `,
});
