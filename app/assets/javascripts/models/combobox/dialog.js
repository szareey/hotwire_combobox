import Combobox from "models/combobox/base"

Combobox.Dialog = Base => class extends Base {
  _moveArtifactsToDialog() {
    this.dialogComboboxTarget.value = this.actingCombobox.value

    this._actingCombobox = this.dialogComboboxTarget
    this._actingListbox = this.dialogListboxTarget

    this.dialogListboxTarget.append(...this.listboxTarget.children)
  }

  _moveArtifactsInline() {
    this.comboboxTarget.value = this.actingCombobox.value

    this._actingCombobox = this.comboboxTarget
    this._actingListbox = this.listboxTarget

    this.listboxTarget.append(...this.dialogListboxTarget.children)
  }

  // After closing a dialog, focus returns to the last focused element.
  // +preventFocusingComboboxAfterClosingDialog+ focuses a placeholder element before opening
  // the dialog, so that the combobox is not focused again after closing, which would reopen.
  _preventFocusingComboboxAfterClosingDialog() {
    this.dialogFocusTrapTarget.focus()
  }

  get _smallViewport() {
    return window.matchMedia(`(max-width: ${this.smallViewportMaxWidthValue})`).matches
  }
}
