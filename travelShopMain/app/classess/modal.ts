import { IUser } from "../models/user/user";
import { ITours } from "../models/tours/index";
import {
  IVipTicket,
  ITicket,
  TicketType,
  IPostTicketData,
} from "../models/ticket/ticket";

function openModal(id = null): void {
  const template = "<div>MyModal</div>";
  const modal = new Modal(id);
  modal.open(template);
}
export function removeModal(): void {}
export function openModalSecond(id = null): void {
  const template = "<div>MyModal 2</div>";
  const modal = new Modal(id);
  modal.open(template);
}

export class Modal {
  private readonly id: string;

  public static modals: any[] = [];
  constructor(id = null) {}

  public open(template: string): void {
    const divWrap = document.createElement("div");
    divWrap.innerHTML = template;
    divWrap.id = this.id;
    divWrap.setAttribute("modal", this.id);
    divWrap.classList.add("modal-element");
    document.body.appendChild(divWrap);
  }

  public remove(): void {
    const modalEl = document.getElementById(this.id);
    modalEl.parentNode.removeChild(modalEl);
  }
  //static method
  public static removeById(id: string = null) {
    let modalId = id;
    const findEl = Modal.modals.find((x) => x.id === modalId);
    if (findEl) {
      findEl.remove();
      Modal.modals = Modal.modals.filter((el) => el.id !== modalId);
    } else {
      if (Array.isArray(Modal.modals)) {
        const lastEl = Modal.modals.pop();
        if (lastEl) {
          lastEl.remove();
        }
      }
    }
  }
}

const modal = new Modal();
