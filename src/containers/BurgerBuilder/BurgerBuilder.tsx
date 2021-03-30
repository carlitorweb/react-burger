import React from "react";
import Aux from "../../hoc/Auxiliar/auxiliar";
import Burger from "../../components/Burger/Burger";
import { BurgerBuilderProps, BurgerBuilderState } from "./type";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE: { [k in string]: number } = {
  salad: 5.5,
  cheese: 10,
  meat: 20.5,
  bacon: 8.5,
};

class BurgerBuilder extends React.Component<
  BurgerBuilderProps,
  BurgerBuilderState
> {
  state: BurgerBuilderState = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 6,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState(updatedState: { [k in string]: number }) {
    let sum = 0;
    for (const key in updatedState) {
      if (Object.hasOwnProperty.call(updatedState, key)) {
        sum += updatedState[key];
      }
    }

    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type: string) => {
    const oldIngredientState = {
      ...this.state.ingredients,
    };
    let oldTotalPriceState = this.state.totalPrice;

    oldIngredientState[type]++;
    oldTotalPriceState += INGREDIENTS_PRICE[type];

    this.setState({
      ingredients: oldIngredientState,
      totalPrice: oldTotalPriceState,
    });
    this.updatePurchaseState(oldIngredientState);
  };

  removeIngredientHandler = (type: string) => {
    const oldIngredientState = {
      ...this.state.ingredients,
    };
    let oldTotalPriceState = this.state.totalPrice;

    if (oldIngredientState[type] > 0) {
      oldIngredientState[type]--;
      oldTotalPriceState -= INGREDIENTS_PRICE[type];
    } else {
      return;
    }

    this.setState({
      ingredients: oldIngredientState,
      totalPrice: oldTotalPriceState,
    });
    this.updatePurchaseState(oldIngredientState);
  };

  purchaseHandle = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandle = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandle = () => {
    alert("You continue, nice!");
  };

  render() {
    let disableInfo: { [k in string]: number | boolean } = {
      ...this.state.ingredients,
    };

    for (const key in this.state.ingredients) {
      if (Object.prototype.hasOwnProperty.call(disableInfo, key)) {
        disableInfo[key] = this.state.ingredients[key] <= 0;
      }
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandle}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.purchaseCancelHandle}
            confirm={this.purchaseContinueHandle}
            totalCost={this.state.totalPrice}
          />
        </Modal>
        <Burger {...this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disableInfo}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandle}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
