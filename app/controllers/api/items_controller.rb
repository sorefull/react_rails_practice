class Api::ItemsController < ApiController
  def index
    render_items
  end

  def create
    Item.create(item_params)
    render_items
  end

  def destroy
    Item.find(params[:id]).destroy
    render_items
  end

  private

  def render_items
    render(partial: 'api/items/index_props', locals: { items: Item.all })
  end

  def item_params
    params.require(:item).permit(:title)
  end
end
