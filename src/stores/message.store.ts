import { makeAutoObservable } from "mobx"

export class MessageStore {
  static shared = new MessageStore()

  constructor() {
    makeAutoObservable(this)
  }

  currentMessage: string = ""
  messages: string[] = []

  addMessage(text: string) {
    this.messages.push(text)
    this.currentMessage = ""
  }
}