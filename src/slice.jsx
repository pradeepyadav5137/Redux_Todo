import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
     name: 'createSliceName',
     initialState: {
          input: "",
          tasks: [],
          check: [],
          edit: false,
     },


     reducers: {
          setInput: function (state, action) {
               state.input = action.payload;
          },
          addTask: function (state, action) {
               if (state.edit === false) {
                    state.tasks = [...state.tasks, state.input]

               }
               else {
                    state.tasks[state.edit] = state.input;
                    state.edit = false;
 
                  }
                  state.input = "";
          },
          DeleteTask: function (state, action,) {
               {(state.check.includes(index)) ? " "  :
                    state.tasks = state.tasks.filter((task, index) => {
                         return index !== action.payload
                    })
               }
              
          },

          setCheck: function (state, action) {
               const index = action.payload;
               state.check = [...state.check, index]
          },

          editTask: function (state, action) {
               state.input = state.tasks[action.payload];
               state.edit = action.payload;
          },
     }

})

export const { setInput, addTask, DeleteTask, setCheck, editTask } = TodoSlice.actions
const TodoReducer = TodoSlice.reducer
export default TodoReducer