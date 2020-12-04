import AbstractClient from "./AbstractClient";

class WarmFuzzyClient extends AbstractClient {
  // eslint-disable-next-line class-methods-use-this
  async postFuzzy({ title, description, elevatorId, recipientId }) {
    const resp = await WarmFuzzyClient.post("/warm-fuzzies", { title, description, elevatorId, recipientId }).catch((error) => {
      const errorStatus = error?.response?.status;
      if ([401, 422].includes(errorStatus)) {
        return error.response.data;
      }

      throw error;
    });

    if (resp && resp.status === 201) {
      console.log("Fuzzy Created!")
      return true;
    }
    return resp;
  }

  async getAllFuzzies() {
    const resp = await WarmFuzzyClient.client()
      .get('/warm-fuzzies/index').catch((error) => {
        const errorStatus = error?.response?.status;
        if ([401, 422].includes(errorStatus)) {
          return error.response.data;
        }
        throw error;
      })

    if (resp && resp.status === 201) {
      return resp.data;
    }
    return resp.data;
  }
}

export default WarmFuzzyClient;
