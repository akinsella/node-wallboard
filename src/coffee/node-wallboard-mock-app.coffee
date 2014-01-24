#
# * Callback method executed when data is received from a socket
# 
processRequest = (socket, req) ->

	logRequest(req)
	commandType = extractCommandType(req)
	if commandType == 10
		res = new Buffer([1, 1, 10, 0, 0, 0, 63, 210, 3])

	logResponse(res)
	socket.write res

extractCommandType = (req) ->
	commandType = req.readUInt8(2)
	console.log "Command Type: #{commandType}"
	commandType


logRequest = (req) ->
	console.log "-------------------------------------------"
	console.log "Request"
	console.log "-------------------------------------------"
	console.log "Raw: "
	console.log req
	console.log "Stringified: '" + JSON.stringify(req) + "', text: '" + decoder.write(req) + "'"

logResponse = (res) ->
	console.log "-------------------------------------------"
	console.log "Response"
	console.log "-------------------------------------------"
	console.log "Raw: "
	console.log res.toString("binary")
	console.log "Stringified: '" + JSON.stringify(res) + "', text: '" + decoder.write(res) + "'"


#
# * Callback method executed when a new TCP socket is opened.
# 
newSocket = (socket) ->
	socket.on "data", (data) ->
		processRequest socket, data

	socket.on "end", (data) ->
		socket.end()

net = require("net")
StringDecoder = require("string_decoder").StringDecoder
Buffer = require("buffer").Buffer
decoder = new StringDecoder("utf8")

# Create a new server and provide a callback for when a connection occurs
server = net.createServer(newSocket)

# Listen on port 1337
server.listen 2048