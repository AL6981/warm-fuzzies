const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/warm-fuzzies_development",
      test: "postgres://postgres:postgres@localhost:5432/warm-fuzzies_test",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
