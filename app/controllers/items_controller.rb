class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def create
    Item.create(item_params)
    redirect_to root_path
  end

  def destroy
    Item.find(params[:id]).destroy
    redirect_to root_path
  end

  private

  def item_params
    params.require(:item).permit(:title)
  end
end
