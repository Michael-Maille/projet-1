export function postEcho(req, res) {
  return res.status(200).json({ echo: req.validatemessage });
}
