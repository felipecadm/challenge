import { Octokit } from "@octokit/core";
import { useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { setCurrentUser, User } from "../redux/Ducks/UserDuck"


const octokit = new Octokit()




export const getUser =  async (username: string) => {
  const response = await octokit.request('GET /users/{username}', {
    username: username
  }).then(res => res.data)
  return response
}

export const getUserFollowers = async (username: string) => {
  const response = await octokit.request('GET /users/{username}/followers', {
    username: username
  }).then(res => res.data)
  
  return response
  }

export const getUserFollowing = async (username: string) => {
  const response = await octokit.request('GET /users/{username}/following', {
    username: username
  }).then(res => res.data)
  return response
}
  
export const getUserOrgs = async (username: string) => {
  const response = await octokit.request('GET /users{username}/orgs', {
    username: username
  }).then(res => res.data)
  return response
  }

export const getUserRepos = async (username: string) => {
  const response = await octokit.request('GET /users/{username}/repos', {
    username: username
  }).then(res => res.data)
  return response
  }


// const dataToUser() {
//   const newUser: User {
//     username: string
//     name: string;
//     followers: string[]
//     following: string[]
//     Respos: respository[]
//   }
// }