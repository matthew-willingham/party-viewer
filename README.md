# party-viewer

The Party Viewer shows current party members or campaign NPCs

## Installation

Install the required dependencies:

npm install

## Running the Microservice

Start the microservice:

npm start

The microservice runs on:

http://localhost:5557

## Endpoints

### GET /party

Returns all current party members.

Each party member includes:

- ID
- Name
- Class
- Level
- Current health
- Maximum health

Example response:

{
    "party": [
        {
            "id": 1,
            "name": "Aragorn",
            "class": "Fighter",
            "level": 5,
            "currentHealth": 48,
            "maxHealth": 52
        }
    ]
}

If the party is empty:

{
    "message": "The party is empty.",
    "party": []
}


### GET /party/:id

Returns a specific party member using their ID.

Example request:

GET /party/1

Example response:

{
    "member": {
        "id": 1,
        "name": "Aragorn",
        "class": "Fighter",
        "level": 5,
        "currentHealth": 48,
        "maxHealth": 52
    }
}

If the party member does not exist:

{
    "error": "Party member not found."
}


### GET /npcs

Returns all NPCs in the campaign.

Each NPC includes:

- ID
- Name
- Race
- Description

Example response:

{
    "npcs": [
        {
            "id": 1,
            "name": "Treebeard",
            "race": "Ent",
            "description": "An ancient, tree-like Ent who guards Fangorn Forest."
        }
    ]
}

If there are no NPCs:

{
    "message": "No NPCs are available.",
    "npcs": []
}


### GET /npcs/:id

Returns a specific NPC using their ID.

Example request:

GET /npcs/1

Example response:

{
    "npc": {
        "id": 1,
        "name": "Treebeard",
        "race": "Ent",
        "description": "An ancient, tree-like Ent who guards Fangorn Forest."
    }
}

If the NPC does not exist:

{
    "error": "NPC not found."
}


## Data Storage

Party information is stored in:

party.json

NPC information is stored in:

npcs.json

The microservice reads these files whenever party or NPC information is requested.


## Testing

Start the microservice:

npm start

Then open another terminal and run:

npm test