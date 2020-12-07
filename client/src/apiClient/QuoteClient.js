import AbstractClient from "./AbstractClient";

class QuoteClient extends AbstractClient {
  async getRandomQuote() {
    const resp = await QuoteClient.client()
      .get("/quotes").catch((error) => {
        const errorStatus = error?.response?.status;
        if ([401, 422].includes(errorStatus)) {
          return error.response.data;
        }
        throw error;
      })

    if (resp && resp.status === 201) {
      return JSON.parse(resp.data.randomQuote)
    }
  }
}

export default QuoteClient;
