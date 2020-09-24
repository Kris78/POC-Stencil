import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import classnames from 'classnames';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.scss',
  shadow: true,
})
export class DsButton {
  clickedTimeout: NodeJS.Timeout;

  /** A click counter */
  @State() count = 0;

  /**
   * Used for the button animation\
   * Add `button--clicked` className on the button for 300ms
   */
  @State() isClicked = false;

  /** Show a loading message instead of the label */
  @Prop() isLoading = false;

  /** The label of the button */
  @Prop() label: string;

  /**
   * The width (in px) of the button\
   * `auto` by default
   */
  @Prop() width: number;

  /** Emit after each click on the button */
  @Event() buttonClick: EventEmitter<number>;

  private increment() {
    this.count += 1;
  }

  private handleClick(event: MouseEvent) {
    event.preventDefault();

    this.increment();

    this.isClicked = true;

    this.clickedTimeout = setTimeout(() => {
      this.isClicked = false;
    }, 300);

    this.onButtonClick();
  }

  private onButtonClick() {
    this.buttonClick.emit(this.count);
  }

  disconnectedCallback() {
    clearInterval(this.clickedTimeout);
  }

  render() {
    return (
      <button
        class={classnames({
          'button--clicked': this.isClicked,
          'button--focused': true,
        })}
        onClick={(event: MouseEvent) => this.handleClick(event)}
        style={{ width: this.width ? `${this.width}px` : 'auto' }}
        type="button"
      >
        {this.isLoading ? (
          <span class="button-text">Loading...</span>
        ) : (
          <span class="button-text">
            {this.label}
            {this.count ? ` ${this.count}` : ''}
          </span>
        )}
      </button>
    );
  }
}
