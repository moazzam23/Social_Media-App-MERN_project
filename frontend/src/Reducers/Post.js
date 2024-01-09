import {createReducer} from "@reduxjs/toolkit"


const LikeSuccess='LikeSuccess';
const LikeFailure='LikeFailure';
const LikeRequest='LikeRequest';
const CommentRequest='CommentRequest';
const CommentSuccess='CommnetSuccess';
const CommetFailure='CommentFailure';
const deleteCommentRequest='deleteCommentRequest';
const deleteCommentSuccess='deleteCommnetSuccess';
const deleteCommetFailure='deleteCommentFailure';
const UpdatepostRequest='UpdatepostRequest';
const UpdatepostSuccess='UpdatepostSuccess';
const UpdatepostFailure='UpdatepostFailure';
const MypostsRequest='MypostsRequest';
const MypostsSuccess='MypostsSuccess';
const MypostsFailure='MypostsFailure';
const DeletepostRequest='DeletepostRequest';
const DeletepostSuccess='DeletepostSuccess';
const DeletepostFailure='DeletepostFailure';
const NewpostRequest='NewpostRequest';
const NewpostSuccess='NewpostSuccess';
const NewpostFailure='NewpostFailure';
const UpdateProfileRequest='UpdateProfileRequest';
const UpdateProfileSuccess='UpdateProfileSuccess';
const UpdateProfileFailure='UpdateProfileFailure';
const  ClearError='ClearError';
const ClearMessage='ClearMessage';

const initialState={};

export const LikeanddislikeReducer= createReducer(initialState,(builder)=>{

    builder.addCase(
        LikeRequest,(state)=>{
            state.loading=true;
        })
        .addCase(
        LikeSuccess,(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        })
        .addCase(
        LikeFailure,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
   .addCase(
        CommentRequest,(state)=>{
            state.loading=true;
        })
        .addCase(
        CommentSuccess,(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        })
        .addCase(
        CommetFailure,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
   .addCase(
        deleteCommentRequest,(state)=>{
            state.loading=true;
        })
        .addCase(
        deleteCommentSuccess,(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        })
        .addCase(
        deleteCommetFailure,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
        .addCase(
        NewpostRequest,(state)=>{
            state.loading=true;
        })
        .addCase(
        NewpostSuccess,(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        })
        .addCase(
    NewpostFailure,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
        .addCase(
        UpdatepostRequest,(state)=>{
            state.loading=true;
        })
        .addCase(
        UpdatepostSuccess,(state,action)=>{
            state.loading=false;
            state.message=action.payload;
        })
        .addCase(
    UpdatepostFailure,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
        .addCase(
            DeletepostRequest,(state)=>{
                state.loading=true;
            })
            .addCase(
            DeletepostSuccess,(state,action)=>{
                state.loading=false;
                state.message=action.payload;
            })
            .addCase(
            DeletepostFailure,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            })
            .addCase(
                UpdateProfileRequest,(state)=>{
                    state.loading=true
                }  )
                .addCase(
                    UpdateProfileSuccess,(state,action)=>{
                        state.loading=false;
                        state.message=action.payload;
                    })
                    .addCase(
                    UpdateProfileFailure,(state,action)=>{
                        state.loading=false;
                        state.error=action.payload;
                    })
        .addCase(
        ClearError,(state)=>{
state.error=null;
        })
        .addCase(
        ClearMessage,(state)=>{
state.message=null;
        })
    })
    

    //myposts
export const MyspostReducer = createReducer(initialState,(builder)=>{

    builder.addCase(
        MypostsRequest,(state)=>{
            state.loading=true;
        })
        .addCase(
        MypostsSuccess,(state,action)=>{
            state.loading=false;
            state.posts=action.payload;
        })
        .addCase(
        MypostsFailure,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    .addCase(
        ClearError,(state)=>{
            state.error=null;
        }
    )
    })

    export const newpost=createReducer(initialState,(builder)=>{
        
    })