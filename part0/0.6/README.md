Here is a simple flow chart:

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>browser: prevent default behaviour of reloading page on submit

    browser->>browser: create a new note with content and date


    browser->>browser: add the newly created note to the notes on the frontend

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: returns the newly created note with a success status
    deactivate server



```
