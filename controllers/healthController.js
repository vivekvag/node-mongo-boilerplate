exports.healthCheck = (req, res) => {
  console.log('Health check request received.');
  res.status(200).json({ status: 'OK', message: 'Server is running.' });
};
