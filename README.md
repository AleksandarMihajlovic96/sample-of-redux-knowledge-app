# Sample of Redux React Knowledge Application

Hi,
My name is Aleksandar Mihajlovic, and I am experienced Front-End developer
This project is about my Redux React Knowledge, and I just created it, so it will be constantly updated with some new stuff.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Definition of folders

There are 3 folders inside this project: **components**, **hooks** and **state**.

### Components

Components folder is used for showing html inside the application. It has two files, **App.tsx** and **RepositoriesList.tsx**. **App** component is there only as the cointaer for the second one, and **RepositoriesList** is used to get input for search term and then to print out what API returns from store.

### Hooks

Hooks folder is here to define custom hooks that makes functionality reusable and cleaner. There are two hooks, **useActions** and **useTypedSelector**. **useAction** hook is used to bring all **actionCreators** in one, so that we dont need to write everytime dispatch of the action creator. **useTypedSelector** is used because when we use **useSelector** hook directly inside component, react throws an error and says that the state type needs to be defined, so this hook is created using **useSelector** hook to bypass this error.

### State

Inside state folders there multiple subfolders that define Redux and State inside this application, and those subfolders are: **action-creators**, **action-types**, **actions** and **reducers**. 

**action-creators** subfolder is used to invoke (dispatch) actions and make an API call to get the date. In there are written try and catch.

**action-types** subfolder is used to define **Enums** for types of the actions.

**actions** subfolder is used to define an action (invoking, success and error) and to combine those 3.

**reducers** subfolder is used to define an reducer that puts data in state and updates it based on dispatched action.
