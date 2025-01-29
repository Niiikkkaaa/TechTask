import { defineStore } from "pinia";
import axios from "axios";
import { ReviewData } from "./types";
import { calculateAverage } from "./utils";

export const useReviewsStore = defineStore("reviews", {
  state: () => ({
    rating: 0,
    reviewsCount: 0,
    loading: false,
    error: null,
    reviews: [] as ReviewData[],
    isReviewsListOpen: false,
  }),
  actions: {
    fetchReviewsData() {
      this.loading = true;
      this.error = null;

      return axios
        .get<ReviewData[]>(
          "https://6797be91c2c861de0c6dd89c.mockapi.io/api/reviews/reviews"
        )
        .then((response) => {
          const reviewData = response.data;
          this.reviews = reviewData;
          this.reviewsCount = reviewData.length;
          const ratings = reviewData.map((item) => item.rating);
          this.rating = calculateAverage(ratings);
        })
        .catch((error) => {
          this.error = error.response
            ? error.response.data.message
            : error.message;
          console.error("Error:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    addReview(newReview: ReviewData) {
      return axios
        .post(
          "https://6797be91c2c861de0c6dd89c.mockapi.io/api/reviews/reviews",
          newReview
        )
        .then(() => {
          this.reviews.push(newReview);
          this.reviewsCount = this.reviews.length;
          const ratings = this.reviews.map((item) => item.rating);
          this.rating = calculateAverage(ratings);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    },
    openReviewsList() {
      this.isReviewsListOpen = true;
    },
    closeReviewsList() {
      this.isReviewsListOpen = false;
    },
  },
});
