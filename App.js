import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mobiles: [
        {
          mId: 872534,
          mBrand: "Samsung",
          mName: "S20",
          mPrice: 42000,
        },
        {
          mId: 956568,
          mBrand: "One Plus",
          mName: "9R",
          mPrice: 39000,
        },
        {
          mId: 176345,
          mBrand: "Vivo",
          mName: "V20",
          mPrice: 22000,
        },
        {
          mId: 383838,
          mBrand: "POCO",
          mName: "M2 pro",
          mPrice: 18000,
        },
        {
          mId: 898432,
          mBrand: "Honor",
          mName: "9lite",
          mPrice: 12000,
        },
        {
          mId: 8762334,
          mBrand: "OPPO",
          mName: "F17 Pro",
          mPrice: 15000,
        },
        {
          mId: 804578,
          mBrand: "Redmi",
          mName: "Note 10 pro",
          mPrice: 16000,
        },
        {
          mId: 151635,
          mBrand: "Redmi",
          mName: "Note 10",
          mPrice: 20000,
        },
        {
          mId: 176346,
          mBrand: "POCO",
          mName: "X3 Pro",
          mPrice: 32000,
        },
      ],
      filteredMobiles: [
        {
          mId: 872534,
          mBrand: "Samsung",
          mName: "S20",
          mPrice: 42000,
        },
        {
          mId: 956568,
          mBrand: "One Plus",
          mName: "9R",
          mPrice: 39000,
        },
        {
          mId: 176345,
          mBrand: "Vivo",
          mName: "V20",
          mPrice: 22000,
        },
        {
          mId: 383838,
          mBrand: "POCO",
          mName: "M2 pro",
          mPrice: 18000,
        },
        {
          mId: 898432,
          mBrand: "Honor",
          mName: "9lite",
          mPrice: 12000,
        },
        {
          mId: 8762334,
          mBrand: "OPPO",
          mName: "F17 Pro",
          mPrice: 15000,
        },
        {
          mId: 804578,
          mBrand: "Redmi",
          mName: "Note 10 pro",
          mPrice: 16000,
        },
        {
          mId: 151635,
          mBrand: "Redmi",
          mName: "Note 10",
          mPrice: 20000,
        },
        {
          mId: 176346,
          mBrand: "POCO",
          mName: "X3 Pro",
          mPrice: 32000,
        },
      ],
    };
  }

  mapMobiles() {
    return this.state.filteredMobiles.map((mobile, index) => (
      <div key={mobile.mId} className="col-3 my-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{mobile.mBrand + " " + mobile.mName}</h5>
            <p className="lead mb-0">{"Rs. " + mobile.mPrice}</p>
          </div>
        </div>
      </div>
    ));
  }

  filterByBrand(brand) {
    let filteredMobiles = [];
    Object.assign(filteredMobiles, this.state.mobiles);

    let temp = filteredMobiles.filter(
      (filteredMobile) => filteredMobile.mBrand === brand
    );

    this.setState({
      filteredMobiles: temp,
    });
  }

  filterByPrice(min, max) {
    let filteredMobiles = [];
    Object.assign(filteredMobiles, this.state.mobiles);

    let temp = filteredMobiles.filter(
      (filteredMobile) =>
        filteredMobile.mPrice >= min && filteredMobile.mPrice <= max
    );

    this.setState({
      filteredMobiles: temp,
    });
  }

  sortByPriceAsc() {
    let sortedMobiles = [];
    Object.assign(sortedMobiles, this.state.mobiles);

    let temp = sortedMobiles.sort((m1, m2) => {
      if (m1.mPrice > m2.mPrice) return 1;
      else if (m2.mPrice > m1.mPrice) return -1;
      else return 0;
    });

    this.setState({
      filteredMobiles: temp,
    });
  }

  sortByPriceDesc() {
    let sortedMobiles = [];
    Object.assign(sortedMobiles, this.state.mobiles);

    let temp = sortedMobiles.sort((m1, m2) => {
      if (m1.mPrice > m2.mPrice) return -1;
      else if (m2.mPrice > m1.mPrice) return 1;
      else return 0;
    });

    this.setState({
      filteredMobiles: temp,
    });
  }

  resetResults() {
    let resetMobiles = [];
    Object.assign(resetMobiles, this.state.mobiles);

    this.setState({
      filteredMobiles: resetMobiles,
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="mt-3 text-primary">Mobile Store</h1>
        <hr />

        <div className="d-flex justify-content-start align-items-center">
          <div className="dropdown me-2">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter By Brand:
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByBrand("Samsung")}
                >
                  Samsung
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByBrand("POCO")}
                >
                  POCO
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByBrand("Redmi")}
                >
                  Redmi
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter By Price:
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByPrice(0, 10000)}
                >
                  0 - 10000
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByPrice(10000, 20000)}
                >
                  10000 - 20000
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.filterByPrice(20000, 90000)}
                >
                  20000 - 90000
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown ms-auto">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort By Price:
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.sortByPriceAsc()}
                >
                  Low to High
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  onClick={() => this.sortByPriceDesc()}
                >
                  High to Low
                </a>
              </li>
            </ul>
          </div>

          <button
            className="btn btn-warning ms-2"
            onClick={() => this.resetResults()}
          >
            Reset
          </button>
        </div>
        <div className="row">{this.mapMobiles()}</div>
      </div>
    );
  }
}
export default App;
