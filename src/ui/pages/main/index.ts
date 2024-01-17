import "@/ui/assets/index.css";

import { Gender, ICharacterData } from "@/entities";
import { CharactersService } from "@/services";
import FilterButtons from "@/ui/components/molecules/filter-buttons";
import CharacterCard from "../../components/organisms/character-card";

import { getUrlParams } from "@/ui/utils";

const FILTER_ID = "filter";
const LIST_ID = "list";
export class Main {
  private characterService: CharactersService;
  private filters: Set<String>;
  private filterButtons: FilterButtons;
  private items: ICharacterData[];
  private pagination = { page: 1, pageSize: 10 };

  private app = document.querySelector("#list");

  private fetchMoreTrigger = document.querySelector("#fetchMore");
  private fetchMoreObserver: IntersectionObserver;

  constructor() {
    this.characterService = new CharactersService();

    this.init();
    this.setInterface();
  }

  init() {
    this.items = [];
    this.filters = new Set();
    const pageNumber = parseInt(getUrlParams("page"));
    if (pageNumber && typeof pageNumber === "number")
      this.pagination.page = pageNumber;

    this.fetchMore().then(() => {
      this.app.classList.remove("loading");
      this.addList();
    });
  }

  setInterface() {
    /**
     * 스크롤 이벤트 처리
     */
    this.setInfiniteScroll();

    /**
     * 필터 버튼 처리
     */
    this.filterButtons.handleClick((filter: Filter, active: boolean) => {
      switch (filter) {
        case "init":
          this.filterButtons.setInactiveAll();
          this.initList();
          break;
        default:
          active ? this.filters.add(filter) : this.filters.delete(filter);
          this.filterList();
          break;
      }
    });

    /**
     * 삭제 버튼 클릭 처리
     */
    this.app.addEventListener("click", (e: any) => {
      const target = e.target.tagName;
      if (target !== "BUTTON") return;

      e.target.closest(".card").style.display = "none";
    });
  }

  addList() {
    const startIndex = (this.pagination.page - 1) * this.pagination.pageSize;
    const last = startIndex + this.pagination.pageSize;

    for (let i: number = startIndex; i < last; i++) {
      new CharacterCard(
        LIST_ID,
        this.items[i],
        this.checkNeedDisplay(this.items[i])
      );
    }
  }

  filterList() {
    const displayedCardElements: any = this.app.querySelectorAll(".card");
    this.items.forEach((item, index) => {
      displayedCardElements[index].style.display = this.checkNeedDisplay(item)
        ? "flex"
        : "none";
    });
  }

  initList() {
    this.filters = new Set();
    this.app
      .querySelectorAll('div[style*="display: none"]')
      .forEach((item: any) => {
        item.style.display = "flex";
      });
  }

  checkNeedDisplay(item: ICharacterData): boolean {
    console.log(item);
    let result = true;
    this.filters.forEach((element: Filter) => {
      switch (element) {
        case "gender":
          if (item.gender === Gender.Male) result = false;
          break;
        case "isLive":
          if (item.died) result = false;
          break;
        case "hasTvSeries":
          if (item.tvSeries.length) result = false;
          break;
        default:
          break;
      }
    });
    return result;
  }

  setInfiniteScroll() {
    this.filterButtons = new FilterButtons(FILTER_ID);
    this.fetchMoreObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          this.pagination.page++;
          this.fetchMore().then(() => this.addList());
        }
      }
    );
    this.fetchMoreObserver.observe(this.fetchMoreTrigger);
  }

  async fetchMore() {
    await this.characterService
      .getAll(this.pagination)
      .then((result: ICharacterData[]) => {
        result.map(
          (character) =>
            (character.tvSeries = character.tvSeries.filter(
              (word) => word.length > 0
            ))
        );
        this.items.push(...result);
      });
  }
}

new Main();
