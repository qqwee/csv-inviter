# How to run the script
asdkjfh
Run the commands:

```
    yarn install
    yarn start
```

# Tests

```
    yarn test
```

# Potential problems not addressed:

- Client has to download the entire Material-UI library. For a less bandwidth, follow https://material-ui.com/getting-started/installation/.

# CSV format

It is assumed that the csv follows the format:

| first_name | last_name | gender (F or M) | email address      | phone number |
| ---------- | --------- | --------------- | ------------------ | ------------ |
| Charles    | De Gaul   | M               | charly@gaul.fr     | +123         |
| Anna       | Hathaway  | F               | annie@hathaway.com | +4133        |

# High level view

The state of the whole application can be devided in three phases: before csv upload, csv uploaded and sent invitations. Before csv upload, we have disabled buttons and a dropzone for file uploads. When the user uploads his/her file, we parse the file with `papaparse`. When the file is parsed, we offer the user a UI to edit/add/delete invitees. Important to note is that for large arrays: eg >1000, there is slight lag in the rendering. This can be aliviated by using react-virtualize and only rendering visible react components. There is a skeleton how to connect to the backend if it is implemented. We dispatch a sendInvite action, and using thunk to make it async. Then we can delete the users that were accepted by the server from the frontend. We can also display a pop modal if there is an error.
