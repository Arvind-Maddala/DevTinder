const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthenticated = token === "xyz";
  if (!isAdminAuthenticated) {
    res.status(401).send("Not authorized");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyza";
  const isAdminAuthenticated = token === "xyz";
  if (!isAdminAuthenticated) {
    res.status(401).send("Not authorized");
  } else {
    next();
  }
};

module.exports = {adminAuth, userAuth};
