/// Author: Matthew Willingham
/// Date: 08/07/2026
/// Description: Party viewer microservice implementation. Allows for viewing of party 
/// members and campaign NPCs

import express from "express";
import fs from "fs";

const app = express();
const PORT = 5557;

app.use(express.json());

/// JSON Files

const PARTY_FILE = "./party.json";
const NPC_FILE = "./npcs.json";

/// Reads party information

function readParty() {
    
    try {
        const data = fs.readFileSync(PARTY_FILE, "utf8");

        return JSON.parse(data);

    }

    catch (error) {
        return {
            party: []
        };
    }
}

/// Reads npcs information

function readNPCs() {

    try {
        const data = fs.readFileSync(NPC_FILE, "utf8");

        return JSON.parse(data);

    }

    catch (error) {
        return {
            npcs: []
        };
    }
}

/// Returns all party members

app.get("/party", (req, res) => {
    
    const data = readParty();

    if (data.party.length === 0) {
        return res.json({
            message: "The party is empty.",
            party: []
        });
    }

    res.json({
        party:data.party
    });
});

/// Returns specific party member by ID

app.get("/party/:id", (req, res) => {

    const data = readParty()

    const id = Number(req.params.id);

    const member = data.party.find(
        partyMember => partyMember.id === id
    );

    if (!member) {

        return res.status(404).json({
            error: "Party member not found."
        });
    }

    res.json({
        member: member
    });
});

/// Returns all campaign NPCs

app.get("/npcs", (req, res) => {

    const data = readNPCs();

    if (data.npcs.length === 0) {

        return res.json({
            message: "There are no NPCs.",
            npcs: []
        });
    }

    res.json({
        npcs: data.npcs
    });
});

/// Returns specific NPC by ID

app.get("/npcs/:id", (req, res) => {

    const data = readNPCs();

    const id = Number(req.params.id);

    const npc = data.npcs.find(
        character => character.id === id
    );

    if (!npc) {

        return res.status(404).json({
            error: "NPC not found."
        });
    }

    res.json({
        npc: npc
    });
});

app.listen(PORT, () => {
    console.log(`Party Viewer Microservice running on port ${PORT}`);
});