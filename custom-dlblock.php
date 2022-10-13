<?php
/**
 * Plugin Name:       Ojako Custom DLBlock
 * Description:       おジャコ仕様の定義リスト,FAQなどにも対応しています
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            ojako
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-dlblock
 *
 * @package           ojako
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

 new OjaDlBlock;
class OjaDlBlock{
  public function __construct() {
    // ブロック登録
    add_action( 'init', array($this, 'ojako_custom_dlblock_init'));
    // アセットファイルの読み込み
    add_action('enqueue_block_assets', array($this,'add_dlblock_scripts'));
  }

  public function ojako_custom_dlblock_init() {
    $dir = dirname( __FILE__ );

    // 依存スクリプトの読み込み
    $script_asset_path = "$dir/build/index.asset.php";
    //アセットファイルのパスが存在しなければビルドが必要なことを伝えるエラーを投げる
    if ( ! file_exists( $script_asset_path ) ) {
      throw new Error(
        'You need to run `npm start` or `npm run build`'
      );
    }
    // Gutenbergが入っていない場合
    if ( ! function_exists( 'register_block_type' ) ) {
      return;
    }

    $index_js     = 'build/index.js';
    $script_asset = require( $script_asset_path );
    //ブロック用のスクリプトの登録
    wp_register_script(
      'description_list_script',
      plugins_url( $index_js, __FILE__ ),
      $script_asset['dependencies'],
      $script_asset['version']
    );

    //エディタ用のスタイルの登録
    wp_register_style(
      'dlblock-editor-style',
      plugins_url( 'build/index.css', __FILE__ ),
      array(),
      filemtime( "$dir/build/index.css" )
    );
    //フロントエンド及びエディタ用のスタイルの登録
    wp_register_style(
      'dlblock-style',
      plugins_url( 'build/style-index.css', __FILE__ ),
      array(),
      filemtime( "$dir/build/style-index.css" )
    );

    //ブロックを登録
    register_block_type(
      //名前空間/ブロック名
      'ojako/custom-dlblock',
      //スクリプトやスタイルをブロックに関連付け
      array(
        'editor_script' => 'description_list_script',
        'editor_style'  => 'dlblock-editor-style',
        'style'         => 'dlblock-style',
      )
    );
  }

  public function add_dlblock_scripts() {
    $dir = dirname( __FILE__ );
    //管理画面以外（フロントエンド側でのみ読み込む）
    if(! is_admin()) {
      wp_enqueue_script(
        'custom_dlblock_script',
        plugins_url( '/js/main.js', __FILE__ ),
        array(),
        filemtime( "$dir/js/main.js" ),
        true
      );
    }
  }
} //class OjaDlBlock{