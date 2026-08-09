/// Author: Matthew Willingham
/// Date: 08/07/2026
/// Description: Test implementation for the party viewer microservice

const PORT = "http://localhost:5557";

async function runTests() {

    console.log("Starting Party Viewer tests...\n");

    // TEST 1
    // Get all party members

    console.log("TEST 1: GET /party");

    let response = await fetch(`${PORT}/party`);
    let data = await response.json();

    console.log("Response:", data);

    if (
        response.status === 200 &&
        Array.isArray(data.party) &&
        data.party.length > 0
    ) {
        console.log("PASS\n");
    } else {
        console.log("FAIL\n");
    }

    // TEST 2
    // Make sure party member information is present

    console.log("TEST 2: Party members contain required information");

    response = await fetch(`${PORT}/party`);
    data = await response.json();

    const member = data.party[0];

    if (
        member.name &&
        member.class &&
        member.level !== undefined &&
        member.currentHealth !== undefined
    ) {
        console.log("PASS\n");
    } else {
        console.log("FAIL\n");
    }

    // TEST 3
    // Get a specific party member

    console.log("TEST 3: GET /party/1");

    response = await fetch(`${PORT}/party/1`);
    data = await response.json();

    console.log("Response:", data);

    if (
        response.status === 200 &&
        data.member &&
        data.member.id === 1
    ) {
        console.log("PASS\n");
    } else {
        console.log("FAIL\n");
    }

    // TEST 4
    // Get a party member that does not exist

    console.log("TEST 4: GET invalid party member");

    response = await fetch(`${PORT}/party/999`);
    data = await response.json();

    console.log("Response:", data);

    if (
        response.status === 404 &&
        data.error === "Party member not found."
    ) {
        console.log("PASS\n");
    } else {
        console.log("FAIL\n");
    }

    // TEST 5
    // Get all NPCs

    console.log("TEST 5: GET /npcs");

    response = await fetch(`${PORT}/npcs`);
    data = await response.json();

    console.log("Response:", data);

    if (
        response.status === 200 &&
        Array.isArray(data.npcs) &&
        data.npcs.length > 0
    ) {
        console.log("PASS\n");
    } else {
        console.log("FAIL\n");
    }

    // TEST 6
    // Make sure NPC information is present

    console.log("TEST 6: NPCs contain required information");

    response = await fetch(`${PORT}/npcs`);
    data = await response.json();

    const npc = data.npcs[0];

    if (
        npc.name &&
        npc.race &&
        npc.description
    ) {
        console.log("PASS\n");
    } else {
        console.log("FAIL\n");
    }

    // TEST 7
    // Get a specific NPC

    console.log("TEST 7: GET /npcs/1");

    response = await fetch(`${PORT}/npcs/1`);
    data = await response.json();

    console.log("Response:", data);

    if (
        response.status === 200 &&
        data.npc &&
        data.npc.id === 1
    ) {
        console.log("PASS\n");
    } else {
        console.log("FAIL\n");
    }


    // TEST 8
    // Get an NPC that does not exist

    console.log("TEST 8: GET invalid NPC");

    response = await fetch(`${PORT}/npcs/999`);
    data = await response.json();

    console.log("Response:", data);

    if (
        response.status === 404 &&
        data.error === "NPC not found."
    ) {
        console.log("PASS\n");
    } else {
        console.log("FAIL\n");
    }

    console.log("Testing complete.");
}

runTests();