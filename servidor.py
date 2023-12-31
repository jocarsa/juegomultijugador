import asyncio
import websockets
import ssl

# Maintain a set of connected clients
connected_clients = set()

# Define a function to handle incoming WebSocket connections
async def handle_client(websocket, path):
    # Add the client to the set of connected clients
    connected_clients.add(websocket)

    try:
        async for message in websocket:
            # Handle incoming messages from clients
            # Broadcast messages to all connected clients
            for client in connected_clients:
                await client.send(message)
    except Exception as e:
        print(f"Error: {e}")
    finally:
        # Remove the client from the set of connected clients when they disconnect
        connected_clients.remove(websocket)

# Create an SSL context
ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ssl_context.load_cert_chain("www.jotauve.es_ssl_certificate.cer", "www.jotauve.es_private_key.key")

# Start the WebSocket server on port 3000 with SSL/TLS
start_server = websockets.serve(handle_client, "jotauve.es", 3000, ssl=ssl_context)

# Run the WebSocket server
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
